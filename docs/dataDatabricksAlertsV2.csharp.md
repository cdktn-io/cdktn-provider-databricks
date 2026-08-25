# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2 databricks_alerts_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2(Construct Scope, string Id, DataDatabricksAlertsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config">DataDatabricksAlertsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config">DataDatabricksAlertsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAlertsV2ProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAlertsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAlertsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAlertsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAlertsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAlertsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAlertsV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAlertsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAlertsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts">Alerts</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference">DataDatabricksAlertsV2ProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts"></a>

```csharp
public DataDatabricksAlertsV2AlertsList Alerts { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfig"></a>

```csharp
public DataDatabricksAlertsV2ProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference">DataDatabricksAlertsV2ProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2ProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertsV2Alerts <a name="DataDatabricksAlertsV2Alerts" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2Alerts {
    string Id,
    DataDatabricksAlertsV2AlertsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#id DataDatabricksAlertsV2#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#id DataDatabricksAlertsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.providerConfig"></a>

```csharp
public DataDatabricksAlertsV2AlertsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}.

---

### DataDatabricksAlertsV2AlertsEffectiveRunAs <a name="DataDatabricksAlertsV2AlertsEffectiveRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEffectiveRunAs {
    string ServicePrincipalName = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsEvaluation <a name="DataDatabricksAlertsV2AlertsEvaluation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluation {
    string ComparisonOperator,
    DataDatabricksAlertsV2AlertsEvaluationSource Source,
    string EmptyResultState = null,
    DataDatabricksAlertsV2AlertsEvaluationNotification Notification = null,
    DataDatabricksAlertsV2AlertsEvaluationThreshold Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source">Source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState">EmptyResultState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification">Notification</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState"></a>

```csharp
public string EmptyResultState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationNotification Notification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationThreshold Threshold { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotification <a name="DataDatabricksAlertsV2AlertsEvaluationNotification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationNotification {
    bool|IResolvable NotifyOnOk = null,
    double RetriggerSeconds = null,
    IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[] Subscriptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk">NotifyOnOk</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions">Subscriptions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `NotifyOnOk`<sup>Optional</sup> <a name="NotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk"></a>

```csharp
public bool|IResolvable NotifyOnOk { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `RetriggerSeconds`<sup>Optional</sup> <a name="RetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds"></a>

```csharp
public double RetriggerSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[] Subscriptions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions {
    string DestinationId = null,
    string UserEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId">DestinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId"></a>

```csharp
public string DestinationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2AlertsEvaluationSource <a name="DataDatabricksAlertsV2AlertsEvaluationSource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationSource {
    string Name,
    string Aggregation = null,
    string Display = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation">Aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

### DataDatabricksAlertsV2AlertsEvaluationThreshold <a name="DataDatabricksAlertsV2AlertsEvaluationThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationThreshold {
    DataDatabricksAlertsV2AlertsEvaluationThresholdColumn Column = null,
    DataDatabricksAlertsV2AlertsEvaluationThresholdValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column">Column</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value">Value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationThresholdColumn Column { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationThresholdValue Value { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationThresholdColumn {
    string Name,
    string Aggregation = null,
    string Display = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation">Aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdValue <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationThresholdValue {
    bool|IResolvable BoolValue = null,
    double DoubleValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue">BoolValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue">DoubleValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue"></a>

```csharp
public bool|IResolvable BoolValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2AlertsParameters <a name="DataDatabricksAlertsV2AlertsParameters" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsParameters {
    string Name,
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#type DataDatabricksAlertsV2#type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#type DataDatabricksAlertsV2#type}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsProviderConfig <a name="DataDatabricksAlertsV2AlertsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}.

---

### DataDatabricksAlertsV2AlertsRunAs <a name="DataDatabricksAlertsV2AlertsRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsRunAs {
    string ServicePrincipalName = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsSchedule <a name="DataDatabricksAlertsV2AlertsSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsSchedule {
    string QuartzCronSchedule,
    string TimezoneId,
    string PauseStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule"></a>

```csharp
public string QuartzCronSchedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

##### `PauseStatus`<sup>Optional</sup> <a name="PauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

### DataDatabricksAlertsV2Config <a name="DataDatabricksAlertsV2Config" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksAlertsV2ProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#page_size DataDatabricksAlertsV2#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.providerConfig"></a>

```csharp
public DataDatabricksAlertsV2ProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#provider_config DataDatabricksAlertsV2#provider_config}.

---

### DataDatabricksAlertsV2ProviderConfig <a name="DataDatabricksAlertsV2ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2ProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/alerts_v2#workspace_id DataDatabricksAlertsV2#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```csharp
private void ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```csharp
public string ServicePrincipalNameInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2AlertsEffectiveRunAs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk">ResetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds">ResetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions"></a>

```csharp
private void PutSubscriptions(IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

---

##### `ResetNotifyOnOk` <a name="ResetNotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```csharp
private void ResetNotifyOnOk()
```

##### `ResetRetriggerSeconds` <a name="ResetRetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```csharp
private void ResetRetriggerSeconds()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```csharp
private void ResetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveNotifyOnOk">EffectiveNotifyOnOk</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveRetriggerSeconds">EffectiveRetriggerSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput">NotifyOnOkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput">RetriggerSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk">NotifyOnOk</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveNotifyOnOk`<sup>Required</sup> <a name="EffectiveNotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveNotifyOnOk"></a>

```csharp
public IResolvable EffectiveNotifyOnOk { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EffectiveRetriggerSeconds`<sup>Required</sup> <a name="EffectiveRetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.effectiveRetriggerSeconds"></a>

```csharp
public double EffectiveRetriggerSeconds { get; }
```

- *Type:* double

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a>

---

##### `NotifyOnOkInput`<sup>Optional</sup> <a name="NotifyOnOkInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```csharp
public bool|IResolvable NotifyOnOkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetriggerSecondsInput`<sup>Optional</sup> <a name="RetriggerSecondsInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```csharp
public double RetriggerSecondsInput { get; }
```

- *Type:* double

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[] SubscriptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

---

##### `NotifyOnOk`<sup>Required</sup> <a name="NotifyOnOk" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```csharp
public bool|IResolvable NotifyOnOk { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetriggerSeconds`<sup>Required</sup> <a name="RetriggerSeconds" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```csharp
public double RetriggerSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get"></a>

```csharp
private DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>[]

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```csharp
private void ResetDestinationId()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```csharp
private void ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">DestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```csharp
public string DestinationIdInput { get; }
```

- *Type:* string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```csharp
public string DestinationId { get; }
```

- *Type:* string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions</a>

---


### DataDatabricksAlertsV2AlertsEvaluationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotification` <a name="PutNotification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification"></a>

```csharp
private void PutNotification(DataDatabricksAlertsV2AlertsEvaluationNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource"></a>

```csharp
private void PutSource(DataDatabricksAlertsV2AlertsEvaluationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold"></a>

```csharp
private void PutThreshold(DataDatabricksAlertsV2AlertsEvaluationThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState"></a>

```csharp
private void ResetEmptyResultState()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification"></a>

```csharp
private void ResetNotification()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt">LastEvaluatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification">Notification</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput">NotificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastEvaluatedAt`<sup>Required</sup> <a name="LastEvaluatedAt" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```csharp
public string LastEvaluatedAt { get; }
```

- *Type:* string

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference Notification { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference Threshold { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput"></a>

```csharp
public string EmptyResultStateInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationNotification NotificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationSource SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThreshold ThresholdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState"></a>

```csharp
public string EmptyResultState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>

---


### DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn"></a>

```csharp
private void PutColumn(DataDatabricksAlertsV2AlertsEvaluationThresholdColumn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `PutValue` <a name="PutValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue"></a>

```csharp
private void PutValue(DataDatabricksAlertsV2AlertsEvaluationThresholdValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column">Column</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput">ColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference Column { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdColumn ColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdValue ValueInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThreshold InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```csharp
private void ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue">BoolValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```csharp
public bool|IResolvable BoolValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```csharp
public bool|IResolvable BoolValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsEvaluationThresholdValue InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---


### DataDatabricksAlertsV2AlertsList <a name="DataDatabricksAlertsV2AlertsList" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get"></a>

```csharp
private DataDatabricksAlertsV2AlertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2Alerts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>[]

---


### DataDatabricksAlertsV2AlertsOutputReference <a name="DataDatabricksAlertsV2AlertsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAlertsV2AlertsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription">CustomDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary">CustomSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs">EffectiveRunAs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName">OwnerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList">DataDatabricksAlertsV2AlertsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath">ParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference">DataDatabricksAlertsV2AlertsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText">QueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs">RunAs</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName">RunAsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomDescription`<sup>Required</sup> <a name="CustomDescription" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription"></a>

```csharp
public string CustomDescription { get; }
```

- *Type:* string

---

##### `CustomSummary`<sup>Required</sup> <a name="CustomSummary" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary"></a>

```csharp
public string CustomSummary { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveRunAs`<sup>Required</sup> <a name="EffectiveRunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs"></a>

```csharp
public DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference EffectiveRunAs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a>

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation"></a>

```csharp
public DataDatabricksAlertsV2AlertsEvaluationOutputReference Evaluation { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName"></a>

```csharp
public string OwnerUserName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parameters"></a>

```csharp
public DataDatabricksAlertsV2AlertsParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList">DataDatabricksAlertsV2AlertsParametersList</a>

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath"></a>

```csharp
public string ParentPath { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksAlertsV2AlertsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference">DataDatabricksAlertsV2AlertsProviderConfigOutputReference</a>

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText"></a>

```csharp
public string QueryText { get; }
```

- *Type:* string

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs"></a>

```csharp
public DataDatabricksAlertsV2AlertsRunAsOutputReference RunAs { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a>

---

##### `RunAsUserName`<sup>Required</sup> <a name="RunAsUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName"></a>

```csharp
public string RunAsUserName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule"></a>

```csharp
public DataDatabricksAlertsV2AlertsScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2Alerts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>

---


### DataDatabricksAlertsV2AlertsParametersList <a name="DataDatabricksAlertsV2AlertsParametersList" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.get"></a>

```csharp
private DataDatabricksAlertsV2AlertsParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a>[]

---


### DataDatabricksAlertsV2AlertsParametersOutputReference <a name="DataDatabricksAlertsV2AlertsParametersOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParametersOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2AlertsParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsParameters">DataDatabricksAlertsV2AlertsParameters</a>

---


### DataDatabricksAlertsV2AlertsProviderConfigOutputReference <a name="DataDatabricksAlertsV2AlertsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2AlertsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsProviderConfig">DataDatabricksAlertsV2AlertsProviderConfig</a>

---


### DataDatabricksAlertsV2AlertsRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsRunAsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsRunAsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName"></a>

```csharp
private void ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput"></a>

```csharp
public string ServicePrincipalNameInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2AlertsRunAs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>

---


### DataDatabricksAlertsV2AlertsScheduleOutputReference <a name="DataDatabricksAlertsV2AlertsScheduleOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2AlertsScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus">ResetPauseStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPauseStatus` <a name="ResetPauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus"></a>

```csharp
private void ResetPauseStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput">PauseStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput">QuartzCronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseStatusInput`<sup>Optional</sup> <a name="PauseStatusInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput"></a>

```csharp
public string PauseStatusInput { get; }
```

- *Type:* string

---

##### `QuartzCronScheduleInput`<sup>Optional</sup> <a name="QuartzCronScheduleInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```csharp
public string QuartzCronScheduleInput { get; }
```

- *Type:* string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; }
```

- *Type:* string

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule"></a>

```csharp
public string QuartzCronSchedule { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAlertsV2AlertsSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>

---


### DataDatabricksAlertsV2ProviderConfigOutputReference <a name="DataDatabricksAlertsV2ProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAlertsV2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAlertsV2ProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2ProviderConfig">DataDatabricksAlertsV2ProviderConfig</a>

---



