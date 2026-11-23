# `dataDatabricksLakewatchBuiltinParsers` Submodule <a name="`dataDatabricksLakewatchBuiltinParsers` Submodule" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksLakewatchBuiltinParsers <a name="DataDatabricksLakewatchBuiltinParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers databricks_lakewatch_builtin_parsers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsers(Construct Scope, string Id, DataDatabricksLakewatchBuiltinParsersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig">DataDatabricksLakewatchBuiltinParsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig">DataDatabricksLakewatchBuiltinParsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksLakewatchBuiltinParsersProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParsers resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchBuiltinParsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchBuiltinParsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchBuiltinParsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksLakewatchBuiltinParsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksLakewatchBuiltinParsers resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksLakewatchBuiltinParsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksLakewatchBuiltinParsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksLakewatchBuiltinParsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.builtinParsers">BuiltinParsers</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BuiltinParsers`<sup>Required</sup> <a name="BuiltinParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.builtinParsers"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersBuiltinParsersList BuiltinParsers { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchBuiltinParsersProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksLakewatchBuiltinParsersBuiltinParsers <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsers {
    string Name,
    DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#name DataDatabricksLakewatchBuiltinParsers#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#name DataDatabricksLakewatchBuiltinParsers#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}.

---

### DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}.

---

### DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#key DataDatabricksLakewatchBuiltinParsers#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#value DataDatabricksLakewatchBuiltinParsers#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#key DataDatabricksLakewatchBuiltinParsers#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#value DataDatabricksLakewatchBuiltinParsers#value}.

---

### DataDatabricksLakewatchBuiltinParsersConfig <a name="DataDatabricksLakewatchBuiltinParsersConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    double PageSize = null,
    DataDatabricksLakewatchBuiltinParsersProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#filter DataDatabricksLakewatchBuiltinParsers#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#page_size DataDatabricksLakewatchBuiltinParsers#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#filter DataDatabricksLakewatchBuiltinParsers#filter}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#page_size DataDatabricksLakewatchBuiltinParsers#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersConfig.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#provider_config DataDatabricksLakewatchBuiltinParsers#provider_config}.

---

### DataDatabricksLakewatchBuiltinParsersProviderConfig <a name="DataDatabricksLakewatchBuiltinParsersProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.145.0/docs/data-sources/lakewatch_builtin_parsers#workspace_id DataDatabricksLakewatchBuiltinParsers#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksLakewatchBuiltinParsersBuiltinParsersList <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.get"></a>

```csharp
private DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchBuiltinParsersBuiltinParsers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a>[]

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserId">ParserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserName">ParserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `ParserId`<sup>Required</sup> <a name="ParserId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserId"></a>

```csharp
public string ParserId { get; }
```

- *Type:* string

---

##### `ParserName`<sup>Required</sup> <a name="ParserName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.parserName"></a>

```csharp
public string ParserName { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.tags"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersBuiltinParsers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsers">DataDatabricksLakewatchBuiltinParsersBuiltinParsers</a>

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersBuiltinParsersProviderConfig</a>

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.get"></a>

```csharp
private DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a>[]

---


### DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference <a name="DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags">DataDatabricksLakewatchBuiltinParsersBuiltinParsersTags</a>

---


### DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference <a name="DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksLakewatchBuiltinParsersProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksLakewatchBuiltinParsers.DataDatabricksLakewatchBuiltinParsersProviderConfig">DataDatabricksLakewatchBuiltinParsersProviderConfig</a>

---



