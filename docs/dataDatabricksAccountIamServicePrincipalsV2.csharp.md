# `dataDatabricksAccountIamServicePrincipalsV2` Submodule <a name="`dataDatabricksAccountIamServicePrincipalsV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamServicePrincipalsV2 <a name="DataDatabricksAccountIamServicePrincipalsV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2 databricks_account_iam_service_principals_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamServicePrincipalsV2(Construct Scope, string Id, DataDatabricksAccountIamServicePrincipalsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config">DataDatabricksAccountIamServicePrincipalsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config">DataDatabricksAccountIamServicePrincipalsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamServicePrincipalsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamServicePrincipalsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamServicePrincipalsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamServicePrincipalsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAccountIamServicePrincipalsV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamServicePrincipalsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamServicePrincipalsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamServicePrincipalsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.servicePrincipals">ServicePrincipals</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.servicePrincipals"></a>

```csharp
public DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList ServicePrincipals { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamServicePrincipalsV2Config <a name="DataDatabricksAccountIamServicePrincipalsV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamServicePrincipalsV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#filter DataDatabricksAccountIamServicePrincipalsV2#filter}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#page_size DataDatabricksAccountIamServicePrincipalsV2#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#filter DataDatabricksAccountIamServicePrincipalsV2#filter}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2Config.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#page_size DataDatabricksAccountIamServicePrincipalsV2#page_size}.

---

### DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals <a name="DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals {
    string ServicePrincipalId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#service_principal_id DataDatabricksAccountIamServicePrincipalsV2#service_principal_id}. |

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/account_iam_service_principals_v2#service_principal_id DataDatabricksAccountIamServicePrincipalsV2#service_principal_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList <a name="DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.get"></a>

```csharp
private DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a>[]

---


### DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference <a name="DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus">AccountSpStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountSpStatus`<sup>Required</sup> <a name="AccountSpStatus" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.accountSpStatus"></a>

```csharp
public string AccountSpStatus { get; }
```

- *Type:* string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalIdInput"></a>

```csharp
public string ServicePrincipalIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.servicePrincipalId"></a>

```csharp
public string ServicePrincipalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipalsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamServicePrincipalsV2.DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals">DataDatabricksAccountIamServicePrincipalsV2ServicePrincipals</a>

---



