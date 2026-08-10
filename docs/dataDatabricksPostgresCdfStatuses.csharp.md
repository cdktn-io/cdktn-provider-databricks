# `dataDatabricksPostgresCdfStatuses` Submodule <a name="`dataDatabricksPostgresCdfStatuses` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresCdfStatuses <a name="DataDatabricksPostgresCdfStatuses" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses databricks_postgres_cdf_statuses}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatuses(Construct Scope, string Id, DataDatabricksPostgresCdfStatusesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig">DataDatabricksPostgresCdfStatusesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig">DataDatabricksPostgresCdfStatusesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresCdfStatusesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresCdfStatuses resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCdfStatuses.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCdfStatuses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCdfStatuses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCdfStatuses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksPostgresCdfStatuses resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresCdfStatuses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresCdfStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresCdfStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdfStatuses">CdfStatuses</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList">DataDatabricksPostgresCdfStatusesCdfStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CdfStatuses`<sup>Required</sup> <a name="CdfStatuses" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.cdfStatuses"></a>

```csharp
public DataDatabricksPostgresCdfStatusesCdfStatusesList CdfStatuses { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList">DataDatabricksPostgresCdfStatusesCdfStatusesList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCdfStatusesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfStatusesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatuses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresCdfStatusesCdfStatuses <a name="DataDatabricksPostgresCdfStatusesCdfStatuses" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesCdfStatuses {
    string Name,
    DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#name DataDatabricksPostgresCdfStatuses#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#name DataDatabricksPostgresCdfStatuses#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}.

---

### DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig <a name="DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}.

---

### DataDatabricksPostgresCdfStatusesConfig <a name="DataDatabricksPostgresCdfStatusesConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    double PageSize = null,
    DataDatabricksPostgresCdfStatusesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#parent DataDatabricksPostgresCdfStatuses#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#page_size DataDatabricksPostgresCdfStatuses#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#parent DataDatabricksPostgresCdfStatuses#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#page_size DataDatabricksPostgresCdfStatuses#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCdfStatusesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#provider_config DataDatabricksPostgresCdfStatuses#provider_config}.

---

### DataDatabricksPostgresCdfStatusesProviderConfig <a name="DataDatabricksPostgresCdfStatusesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.125.0/docs/data-sources/postgres_cdf_statuses#workspace_id DataDatabricksPostgresCdfStatuses#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresCdfStatusesCdfStatusesList <a name="DataDatabricksPostgresCdfStatusesCdfStatusesList" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesCdfStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.get"></a>

```csharp
private DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfStatusesCdfStatuses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a>[]

---


### DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference <a name="DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.committedLsn">CommittedLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.lastSyncTime">LastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.postgresTable">PostgresTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.statusDetail">StatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.ucTable">UcTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommittedLsn`<sup>Required</sup> <a name="CommittedLsn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.committedLsn"></a>

```csharp
public string CommittedLsn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.lastSyncTime"></a>

```csharp
public string LastSyncTime { get; }
```

- *Type:* string

---

##### `PostgresTable`<sup>Required</sup> <a name="PostgresTable" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.postgresTable"></a>

```csharp
public string PostgresTable { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StatusDetail`<sup>Required</sup> <a name="StatusDetail" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.statusDetail"></a>

```csharp
public string StatusDetail { get; }
```

- *Type:* string

---

##### `UcTable`<sup>Required</sup> <a name="UcTable" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.ucTable"></a>

```csharp
public string UcTable { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresCdfStatusesCdfStatuses InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatuses">DataDatabricksPostgresCdfStatusesCdfStatuses</a>

---


### DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference <a name="DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesCdfStatusesProviderConfig</a>

---


### DataDatabricksPostgresCdfStatusesProviderConfigOutputReference <a name="DataDatabricksPostgresCdfStatusesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCdfStatusesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresCdfStatusesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCdfStatuses.DataDatabricksPostgresCdfStatusesProviderConfig">DataDatabricksPostgresCdfStatusesProviderConfig</a>

---



