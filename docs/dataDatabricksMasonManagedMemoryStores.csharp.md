# `dataDatabricksMasonManagedMemoryStores` Submodule <a name="`dataDatabricksMasonManagedMemoryStores` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryStores <a name="DataDatabricksMasonManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores databricks_mason_managed_memory_stores}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStores(Construct Scope, string Id, DataDatabricksMasonManagedMemoryStoresConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig">DataDatabricksMasonManagedMemoryStoresConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig">DataDatabricksMasonManagedMemoryStoresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksMasonManagedMemoryStoresProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStores resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStores.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStores.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStores.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStores.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStores resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryStores to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMasonManagedMemoryStores that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryStores to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.managedMemoryStores">ManagedMemoryStores</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ManagedMemoryStores`<sup>Required</sup> <a name="ManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.managedMemoryStores"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList ManagedMemoryStores { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfig"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoresProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStores.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryStoresConfig <a name="DataDatabricksMasonManagedMemoryStoresConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksMasonManagedMemoryStoresProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#page_size DataDatabricksMasonManagedMemoryStores#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresConfig.property.providerConfig"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStores <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStores" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStores {
    string Name,
    DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#name DataDatabricksMasonManagedMemoryStores#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#name DataDatabricksMasonManagedMemoryStores#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores.property.providerConfig"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#provider_config DataDatabricksMasonManagedMemoryStores#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend {

};
```


### DataDatabricksMasonManagedMemoryStoresProviderConfig <a name="DataDatabricksMasonManagedMemoryStoresProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_stores#workspace_id DataDatabricksMasonManagedMemoryStores#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get"></a>

```csharp
private DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoresManagedMemoryStores[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>[]

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId">CreatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId">OwnerUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend">StorageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.creatorUserId"></a>

```csharp
public string CreatorUserId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `OwnerUserId`<sup>Required</sup> <a name="OwnerUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.ownerUserId"></a>

```csharp
public string OwnerUserId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference</a>

---

##### `StorageBackend`<sup>Required</sup> <a name="StorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.storageBackend"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference StorageBackend { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresManagedMemoryStores InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStores">DataDatabricksMasonManagedMemoryStoresManagedMemoryStores</a>

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference <a name="DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId">BackendId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType">BackendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendId"></a>

```csharp
public string BackendId { get; }
```

- *Type:* string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.backendType"></a>

```csharp
public string BackendType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackendOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend">DataDatabricksMasonManagedMemoryStoresManagedMemoryStoresStorageBackend</a>

---


### DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoresProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStores.DataDatabricksMasonManagedMemoryStoresProviderConfig">DataDatabricksMasonManagedMemoryStoresProviderConfig</a>

---



