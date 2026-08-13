# `dataDatabricksPostgresCatalog` Submodule <a name="`dataDatabricksPostgresCatalog` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresCatalog <a name="DataDatabricksPostgresCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog databricks_postgres_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalog(Construct Scope, string Id, DataDatabricksPostgresCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig">DataDatabricksPostgresCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig">DataDatabricksPostgresCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresCatalogProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCatalog.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksPostgresCatalog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.catalogId">CatalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference">DataDatabricksPostgresCatalogProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference">DataDatabricksPostgresCatalogSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference">DataDatabricksPostgresCatalogStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.catalogId"></a>

```csharp
public string CatalogId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCatalogProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference">DataDatabricksPostgresCatalogProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.spec"></a>

```csharp
public DataDatabricksPostgresCatalogSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference">DataDatabricksPostgresCatalogSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.status"></a>

```csharp
public DataDatabricksPostgresCatalogStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference">DataDatabricksPostgresCatalogStatusOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresCatalogProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresCatalogConfig <a name="DataDatabricksPostgresCatalogConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksPostgresCatalogProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#name DataDatabricksPostgresCatalog#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#provider_config DataDatabricksPostgresCatalog#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#name DataDatabricksPostgresCatalog#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresCatalogProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#provider_config DataDatabricksPostgresCatalog#provider_config}.

---

### DataDatabricksPostgresCatalogProviderConfig <a name="DataDatabricksPostgresCatalogProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#workspace_id DataDatabricksPostgresCatalog#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#workspace_id DataDatabricksPostgresCatalog#workspace_id}.

---

### DataDatabricksPostgresCatalogSpec <a name="DataDatabricksPostgresCatalogSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogSpec {
    string PostgresDatabase,
    string Branch = null,
    bool|IResolvable CreateDatabaseIfMissing = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#postgres_database DataDatabricksPostgresCatalog#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#branch DataDatabricksPostgresCatalog#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.createDatabaseIfMissing">CreateDatabaseIfMissing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#create_database_if_missing DataDatabricksPostgresCatalog#create_database_if_missing}. |

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#postgres_database DataDatabricksPostgresCatalog#postgres_database}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#branch DataDatabricksPostgresCatalog#branch}.

---

##### `CreateDatabaseIfMissing`<sup>Optional</sup> <a name="CreateDatabaseIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec.property.createDatabaseIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseIfMissing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.126.0/docs/data-sources/postgres_catalog#create_database_if_missing DataDatabricksPostgresCatalog#create_database_if_missing}.

---

### DataDatabricksPostgresCatalogStatus <a name="DataDatabricksPostgresCatalogStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresCatalogProviderConfigOutputReference <a name="DataDatabricksPostgresCatalogProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresCatalogProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogProviderConfig">DataDatabricksPostgresCatalogProviderConfig</a>

---


### DataDatabricksPostgresCatalogSpecOutputReference <a name="DataDatabricksPostgresCatalogSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetCreateDatabaseIfMissing">ResetCreateDatabaseIfMissing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCreateDatabaseIfMissing` <a name="ResetCreateDatabaseIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.resetCreateDatabaseIfMissing"></a>

```csharp
private void ResetCreateDatabaseIfMissing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissingInput">CreateDatabaseIfMissingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissing">CreateDatabaseIfMissing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec">DataDatabricksPostgresCatalogSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseIfMissingInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissingInput"></a>

```csharp
public bool|IResolvable CreateDatabaseIfMissingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabaseInput"></a>

```csharp
public string PostgresDatabaseInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CreateDatabaseIfMissing`<sup>Required</sup> <a name="CreateDatabaseIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.createDatabaseIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseIfMissing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresCatalogSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogSpec">DataDatabricksPostgresCatalogSpec</a>

---


### DataDatabricksPostgresCatalogStatusOutputReference <a name="DataDatabricksPostgresCatalogStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresCatalogStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus">DataDatabricksPostgresCatalogStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresCatalogStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresCatalog.DataDatabricksPostgresCatalogStatus">DataDatabricksPostgresCatalogStatus</a>

---



