# `dataDatabricksPostgresDataApi` Submodule <a name="`dataDatabricksPostgresDataApi` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresDataApi <a name="DataDatabricksPostgresDataApi" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api databricks_postgres_data_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApi(Construct Scope, string Id, DataDatabricksPostgresDataApiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig">DataDatabricksPostgresDataApiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig">DataDatabricksPostgresDataApiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresDataApiProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresDataApi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresDataApi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresDataApi.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresDataApi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksPostgresDataApi resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresDataApi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresDataApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresDataApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresDataApiProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference">DataDatabricksPostgresDataApiProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.spec"></a>

```csharp
public DataDatabricksPostgresDataApiSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference">DataDatabricksPostgresDataApiSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.status"></a>

```csharp
public DataDatabricksPostgresDataApiStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference">DataDatabricksPostgresDataApiStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresDataApiProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresDataApiConfig <a name="DataDatabricksPostgresDataApiConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksPostgresDataApiProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#name DataDatabricksPostgresDataApi#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresDataApiProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#provider_config DataDatabricksPostgresDataApi#provider_config}.

---

### DataDatabricksPostgresDataApiProviderConfig <a name="DataDatabricksPostgresDataApiProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#workspace_id DataDatabricksPostgresDataApi#workspace_id}.

---

### DataDatabricksPostgresDataApiSpec <a name="DataDatabricksPostgresDataApiSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiSpec {
    bool|IResolvable DbAggregatesEnabled = null,
    string[] DbExtraSearchPath = null,
    double DbMaxRows = null,
    string[] DbSchemas = null,
    string JwtCacheMaxLifetime = null,
    string JwtRoleClaimKey = null,
    string OpenapiMode = null,
    string[] ServerCorsAllowedOrigins = null,
    bool|IResolvable ServerTimingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows">DbMaxRows</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas">DbSchemas</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode">OpenapiMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}. |

---

##### `DbAggregatesEnabled`<sup>Optional</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbAggregatesEnabled"></a>

```csharp
public bool|IResolvable DbAggregatesEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_aggregates_enabled DataDatabricksPostgresDataApi#db_aggregates_enabled}.

---

##### `DbExtraSearchPath`<sup>Optional</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbExtraSearchPath"></a>

```csharp
public string[] DbExtraSearchPath { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_extra_search_path DataDatabricksPostgresDataApi#db_extra_search_path}.

---

##### `DbMaxRows`<sup>Optional</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbMaxRows"></a>

```csharp
public double DbMaxRows { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_max_rows DataDatabricksPostgresDataApi#db_max_rows}.

---

##### `DbSchemas`<sup>Optional</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.dbSchemas"></a>

```csharp
public string[] DbSchemas { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#db_schemas DataDatabricksPostgresDataApi#db_schemas}.

---

##### `JwtCacheMaxLifetime`<sup>Optional</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtCacheMaxLifetime"></a>

```csharp
public string JwtCacheMaxLifetime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#jwt_cache_max_lifetime DataDatabricksPostgresDataApi#jwt_cache_max_lifetime}.

---

##### `JwtRoleClaimKey`<sup>Optional</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.jwtRoleClaimKey"></a>

```csharp
public string JwtRoleClaimKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#jwt_role_claim_key DataDatabricksPostgresDataApi#jwt_role_claim_key}.

---

##### `OpenapiMode`<sup>Optional</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.openapiMode"></a>

```csharp
public string OpenapiMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#openapi_mode DataDatabricksPostgresDataApi#openapi_mode}.

---

##### `ServerCorsAllowedOrigins`<sup>Optional</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverCorsAllowedOrigins"></a>

```csharp
public string[] ServerCorsAllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#server_cors_allowed_origins DataDatabricksPostgresDataApi#server_cors_allowed_origins}.

---

##### `ServerTimingEnabled`<sup>Optional</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec.property.serverTimingEnabled"></a>

```csharp
public bool|IResolvable ServerTimingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.120.0/docs/data-sources/postgres_data_api#server_timing_enabled DataDatabricksPostgresDataApi#server_timing_enabled}.

---

### DataDatabricksPostgresDataApiStatus <a name="DataDatabricksPostgresDataApiStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresDataApiProviderConfigOutputReference <a name="DataDatabricksPostgresDataApiProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresDataApiProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiProviderConfig">DataDatabricksPostgresDataApiProviderConfig</a>

---


### DataDatabricksPostgresDataApiSpecOutputReference <a name="DataDatabricksPostgresDataApiSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled">ResetDbAggregatesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath">ResetDbExtraSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows">ResetDbMaxRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas">ResetDbSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime">ResetJwtCacheMaxLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey">ResetJwtRoleClaimKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode">ResetOpenapiMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins">ResetServerCorsAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled">ResetServerTimingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbAggregatesEnabled` <a name="ResetDbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbAggregatesEnabled"></a>

```csharp
private void ResetDbAggregatesEnabled()
```

##### `ResetDbExtraSearchPath` <a name="ResetDbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbExtraSearchPath"></a>

```csharp
private void ResetDbExtraSearchPath()
```

##### `ResetDbMaxRows` <a name="ResetDbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbMaxRows"></a>

```csharp
private void ResetDbMaxRows()
```

##### `ResetDbSchemas` <a name="ResetDbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetDbSchemas"></a>

```csharp
private void ResetDbSchemas()
```

##### `ResetJwtCacheMaxLifetime` <a name="ResetJwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtCacheMaxLifetime"></a>

```csharp
private void ResetJwtCacheMaxLifetime()
```

##### `ResetJwtRoleClaimKey` <a name="ResetJwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetJwtRoleClaimKey"></a>

```csharp
private void ResetJwtRoleClaimKey()
```

##### `ResetOpenapiMode` <a name="ResetOpenapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetOpenapiMode"></a>

```csharp
private void ResetOpenapiMode()
```

##### `ResetServerCorsAllowedOrigins` <a name="ResetServerCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerCorsAllowedOrigins"></a>

```csharp
private void ResetServerCorsAllowedOrigins()
```

##### `ResetServerTimingEnabled` <a name="ResetServerTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.resetServerTimingEnabled"></a>

```csharp
private void ResetServerTimingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput">DbAggregatesEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput">DbExtraSearchPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput">DbMaxRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput">DbSchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput">JwtCacheMaxLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput">JwtRoleClaimKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput">OpenapiModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput">ServerCorsAllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput">ServerTimingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows">DbMaxRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas">DbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode">OpenapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbAggregatesEnabledInput`<sup>Optional</sup> <a name="DbAggregatesEnabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabledInput"></a>

```csharp
public bool|IResolvable DbAggregatesEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbExtraSearchPathInput`<sup>Optional</sup> <a name="DbExtraSearchPathInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPathInput"></a>

```csharp
public string[] DbExtraSearchPathInput { get; }
```

- *Type:* string[]

---

##### `DbMaxRowsInput`<sup>Optional</sup> <a name="DbMaxRowsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRowsInput"></a>

```csharp
public double DbMaxRowsInput { get; }
```

- *Type:* double

---

##### `DbSchemasInput`<sup>Optional</sup> <a name="DbSchemasInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemasInput"></a>

```csharp
public string[] DbSchemasInput { get; }
```

- *Type:* string[]

---

##### `JwtCacheMaxLifetimeInput`<sup>Optional</sup> <a name="JwtCacheMaxLifetimeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetimeInput"></a>

```csharp
public string JwtCacheMaxLifetimeInput { get; }
```

- *Type:* string

---

##### `JwtRoleClaimKeyInput`<sup>Optional</sup> <a name="JwtRoleClaimKeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKeyInput"></a>

```csharp
public string JwtRoleClaimKeyInput { get; }
```

- *Type:* string

---

##### `OpenapiModeInput`<sup>Optional</sup> <a name="OpenapiModeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiModeInput"></a>

```csharp
public string OpenapiModeInput { get; }
```

- *Type:* string

---

##### `ServerCorsAllowedOriginsInput`<sup>Optional</sup> <a name="ServerCorsAllowedOriginsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOriginsInput"></a>

```csharp
public string[] ServerCorsAllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ServerTimingEnabledInput`<sup>Optional</sup> <a name="ServerTimingEnabledInput" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabledInput"></a>

```csharp
public bool|IResolvable ServerTimingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbAggregatesEnabled`<sup>Required</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbAggregatesEnabled"></a>

```csharp
public bool|IResolvable DbAggregatesEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DbExtraSearchPath`<sup>Required</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbExtraSearchPath"></a>

```csharp
public string[] DbExtraSearchPath { get; }
```

- *Type:* string[]

---

##### `DbMaxRows`<sup>Required</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbMaxRows"></a>

```csharp
public double DbMaxRows { get; }
```

- *Type:* double

---

##### `DbSchemas`<sup>Required</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.dbSchemas"></a>

```csharp
public string[] DbSchemas { get; }
```

- *Type:* string[]

---

##### `JwtCacheMaxLifetime`<sup>Required</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtCacheMaxLifetime"></a>

```csharp
public string JwtCacheMaxLifetime { get; }
```

- *Type:* string

---

##### `JwtRoleClaimKey`<sup>Required</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.jwtRoleClaimKey"></a>

```csharp
public string JwtRoleClaimKey { get; }
```

- *Type:* string

---

##### `OpenapiMode`<sup>Required</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.openapiMode"></a>

```csharp
public string OpenapiMode { get; }
```

- *Type:* string

---

##### `ServerCorsAllowedOrigins`<sup>Required</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverCorsAllowedOrigins"></a>

```csharp
public string[] ServerCorsAllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ServerTimingEnabled`<sup>Required</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.serverTimingEnabled"></a>

```csharp
public bool|IResolvable ServerTimingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresDataApiSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiSpec">DataDatabricksPostgresDataApiSpec</a>

---


### DataDatabricksPostgresDataApiStatusOutputReference <a name="DataDatabricksPostgresDataApiStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresDataApiStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas">AvailableSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled">DbAggregatesEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath">DbExtraSearchPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows">DbMaxRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas">DbSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime">JwtCacheMaxLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey">JwtRoleClaimKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode">OpenapiMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins">ServerCorsAllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled">ServerTimingEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSchemas`<sup>Required</sup> <a name="AvailableSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.availableSchemas"></a>

```csharp
public string[] AvailableSchemas { get; }
```

- *Type:* string[]

---

##### `DbAggregatesEnabled`<sup>Required</sup> <a name="DbAggregatesEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbAggregatesEnabled"></a>

```csharp
public IResolvable DbAggregatesEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DbExtraSearchPath`<sup>Required</sup> <a name="DbExtraSearchPath" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbExtraSearchPath"></a>

```csharp
public string[] DbExtraSearchPath { get; }
```

- *Type:* string[]

---

##### `DbMaxRows`<sup>Required</sup> <a name="DbMaxRows" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbMaxRows"></a>

```csharp
public double DbMaxRows { get; }
```

- *Type:* double

---

##### `DbSchemas`<sup>Required</sup> <a name="DbSchemas" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.dbSchemas"></a>

```csharp
public string[] DbSchemas { get; }
```

- *Type:* string[]

---

##### `JwtCacheMaxLifetime`<sup>Required</sup> <a name="JwtCacheMaxLifetime" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtCacheMaxLifetime"></a>

```csharp
public string JwtCacheMaxLifetime { get; }
```

- *Type:* string

---

##### `JwtRoleClaimKey`<sup>Required</sup> <a name="JwtRoleClaimKey" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.jwtRoleClaimKey"></a>

```csharp
public string JwtRoleClaimKey { get; }
```

- *Type:* string

---

##### `OpenapiMode`<sup>Required</sup> <a name="OpenapiMode" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.openapiMode"></a>

```csharp
public string OpenapiMode { get; }
```

- *Type:* string

---

##### `ServerCorsAllowedOrigins`<sup>Required</sup> <a name="ServerCorsAllowedOrigins" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverCorsAllowedOrigins"></a>

```csharp
public string[] ServerCorsAllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ServerTimingEnabled`<sup>Required</sup> <a name="ServerTimingEnabled" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.serverTimingEnabled"></a>

```csharp
public IResolvable ServerTimingEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresDataApiStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresDataApi.DataDatabricksPostgresDataApiStatus">DataDatabricksPostgresDataApiStatus</a>

---



